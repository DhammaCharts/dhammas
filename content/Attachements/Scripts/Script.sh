#!/bin/bash

# Define the starting directory
start_dir="."

# Find directories with .sdr in their name and delete them
find "$start_dir" -type d -name "*.*sdr*" -exec rm -rf {} +
