import os
import sys

action = sys.argv[1]
args = [] if len(sys.argv) < 3 else sys.argv[2:]
found = False
for script in os.listdir("./framework"):
    if script == action:
        cmd = [
            os.path.join("./framework", action),
            *args,
        ]
        os.system(" ".join(cmd))
        found = True

if not found:
    print(f"Script '{action}' not found. Exiting.")
