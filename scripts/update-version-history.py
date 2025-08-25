
import os
import re
import subprocess
from natsort import natsorted

def get_tags():
    result = subprocess.run(['git', 'tag'], stdout=subprocess.PIPE)
    tags = result.stdout.decode('utf-8').strip().split('\n')
    return tags

def get_file_content_at_tag(tag, file_path):
    try:
        result = subprocess.run(['git', 'show', f'{tag}:{file_path}'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if result.returncode != 0:
            return None
        return result.stdout.decode('utf-8')
    except Exception:
        return None

def main():
    tags = get_tags()
    
    filtered_tags = [tag for tag in tags if tag.startswith('v3') and 'beta' not in tag]
    sorted_tags = natsorted(filtered_tags, reverse=True)
    
    table = "| @amplitude/amplitude-js-gtm Version | Browser SDK Version |\n"
    table += "|-------------------------------------|---------------------|\n"
    
    for tag in sorted_tags:
        pkg_version = tag.replace('v', '')
        
        wrapper_content = get_file_content_at_tag(tag, 'src/amplitude-wrapper.js')
        
        browser_sdk_version = "N/A"
        if wrapper_content:
            match = re.search(r'analytics-browser-gtm-([0-9]+\.[0-9]+\.[0-9]+)-min\.js\.gz', wrapper_content)
            if match:
                browser_sdk_version = match.group(1)

        table += f"| {pkg_version.ljust(35)} | {browser_sdk_version.ljust(19)} |\n"

    with open('VERSION_HISTORY.md', 'w') as f:
        f.write(table)

if __name__ == '__main__':
    main()
