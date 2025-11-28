
import os
from datetime import datetime

import pandas as pd
import requests
from tabulate import tabulate

response = requests.post(
    "https://api.brightnode.cloud/graphql", 
    headers={
        "content-type": "application/json"
    }, 
    json={
        "query": "query GpuTypes { gpuTypes { id displayName memoryInGb } }"
    })

response.raise_for_status()

gpu_data = response.json()
gpus = gpu_data["data"]["gpuTypes"]

gpus_df = pd.DataFrame(gpus)

gpus_df = gpus_df[(gpus_df["id"].str.lower() != "unknown")]

gpus_df.sort_values(by="displayName").reset_index(drop=True, inplace=True)

file_path = os.path.join(
    os.path.dirname(__file__), "../references/gpu-types.mdx"
)

table = tabulate(gpus_df.values.tolist(), headers=["GPU ID", "Display Name", "Memory (GB)"], tablefmt="github", showindex=False)

with open(file_path, "w") as file:
    # Write the table headers
    date = datetime.now().strftime("%Y-%m-%d")
    file.write(
        f"""---
title: "GPU types"
description: "Explore the GPUs available on Brightnode."
---

For information on pricing, see [GPU pricing](https://www.brightnode.cloud/gpu-instance/pricing).

## GPU types

This table lists all GPU types available on Brightnode:
{{/* Table last generated: {date} */}}

{table}
""")

print("Markdown file with GPU data created successfully.")
