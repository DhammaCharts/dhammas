#!/bin/bash

# Function to title case a string
function title_case() {
    local str=$1
    str=${str,,} # Convert to lowercase
    echo "${str^}" # Capitalize the first character
}

# Find all files and directories in the given directory, excluding hidden ones
find "$1" -depth -not -path '*/\.*' -execdir bash -c '
    for path; do
        dir=$(dirname "$path")
        file=$(basename "$path")
        newfile=$(title_case "$file")
        mv -n "$path" "$dir/$newfile"
    done
' _ {} +
