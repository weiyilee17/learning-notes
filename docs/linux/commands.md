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

## diff

- diff file1 file2

## curl

- curl -I http://localhost:5432 (-I for only header information)
