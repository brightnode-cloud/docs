/**
 * Registers the shared Nexel taxonomy on the docs site's PostHog instance.
 *
 * This file does NOT load or init PostHog. Two things already do:
 *   - Mintlify's native integration (integrations.posthog in docs.json)
 *   - the PostHog custom HTML tag in GTM-5TC97QSW
 * Both carry the brightnode project key. A third init here is what previously
 * broke the docs site: this file used to run its own loader snippet against a
 * foreign project key, and a find-and-replace had corrupted `parentNode` into
 * `parentBnode` inside it. That threw before the real library could load, but
 * only after claiming `window.posthog` and setting `__SV`, so every later
 * init — Mintlify's and GTM's — short-circuited onto the broken stub and threw
 * too. docs.brightnode.cloud was sending nothing to PostHog at all.
 *
 * `brand` is required on every event by the portfolio taxonomy so one PostHog
 * org stays separable per brand. register() makes it a super-property, so it
 * rides on autocapture and pageviews alike.
 */
(function () {
  var BRAND = "brightnode";
  var SITE_AREA = "docs";
  var POLL_MS = 100;
  var MAX_ATTEMPTS = 50; // give the loader 5s, then stop

  function register() {
    var ph = window.posthog;
    if (!ph || typeof ph.register !== "function") return false;
    ph.register({ brand: BRAND, site_area: SITE_AREA });
    return true;
  }

  // register() is safe to call on PostHog's pre-load stub — it queues — so the
  // only thing worth waiting for is the stub existing.
  if (register()) return;

  var attempts = 0;
  var timer = setInterval(function () {
    attempts += 1;
    if (register() || attempts >= MAX_ATTEMPTS) clearInterval(timer);
  }, POLL_MS);
})();
