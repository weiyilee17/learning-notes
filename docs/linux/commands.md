# Commands

## wc

word count

## find

- find . -name "\*.conf\*"
- find . -type f -name "\\\*.controller\\\*"
- find . -type f -name "\\\*.controller\\\*" -exec "Command that \
  runs on every file found"
- find . -type f -name "\\\*.controller\\\*" -exec rm -i {} \;

- find . -type f -name "\\\*.controller\\\*" -exec rm -i {} \+
  Using + concatenates every file found and joins it to 1 long command

- find /var/log -type f -name "\*.log" -exec grep "ERROR" {} \; -print
- This searches every .log file for the string “ERROR,” then prints out the \
  file name.

- find /tmp -type f -mtime -7
- Finds files modified in the last 7 days.

## diff

- diff file1 file2

## curl

- curl -I http://localhost:5432 (-I for only header information)
