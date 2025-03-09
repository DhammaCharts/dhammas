import os
import glob
import re

# Define the directory where the .md files are located
base_dir = '/Volumes/CITTAVAULT/Documents/DhammasVault/'

# Find all .md files in the directory and its subdirectories
for filename in glob.iglob(base_dir + '**/*.md', recursive=True):
    # Read the file content
    with open(filename, 'r+') as file:
        content = file.read()
        
        # Use regex to find and remove lines starting with 'title:'
        new_content = re.sub(r'^title:.*\n', '', content, flags=re.MULTILINE)
        
        # Write the modified content back to the file
        file.seek(0)
        file.write(new_content)
        file.truncate()

