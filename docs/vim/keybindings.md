# Key Bindings

## These are notes for me to lookup in the future. Some may not be the default

## Some are key bindings related to plugins like telescope

## but the keybindings that have been remapped

- <kbd>Ctrl</kbd> + <kbd>h, l</kbd> = move to left and right pane
- <kbd>:</kbd> + <kbd>v</kbd> + <kbd>s</kbd> = vertical split
- <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>v</kbd> = vertical split
- <kbd>Ctrl</kbd> + <kbd>w</kbd> + <kbd>s</kbd> = horizontal split

- <kbd>~</kbd> = toggle space
- <kbd>u</kbd> = undo (like <kbd>Ctrl</kbd> + <kbd>z</kbd>)
- <kbd>Ctrl</kbd> + <kbd>r</kbd> = redo
  (like <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>z</kbd>)
- <kbd>Ctrl</kbd> + <kbd>-</kbd> = go to previous file
- <kbd>f</kbd> + <kbd>{char}</kbd> = find char
- - <kbd>;</kbd> = find next char
- - <kbd>,</kbd> = find prev char

- <kbd>e</kbd> = go to end of word
- <kbd>g</kbd> + <kbd>e</kbd> = go to previous end of word

- <kbd>D</kbd> = <kbd>d$</kbd>
- <kbd>Y</kbd> = <kbd>y$</kbd>

- <kbd>}</kbd> = go to next empty line
- <kbd>{</kbd> = go to previous empty line

- <kbd>Ctrl</kbd> + <kbd>g</kbd> + <kbd>d</kbd> = go to definition
- <kbd>Ctrl</kbd> + <kbd>g</kbd> + <kbd>r</kbd> = go to reference

- <kbd>Ctrl</kbd> + <kbd>o</kbd> = go out to the file you were just in
- <kbd>Ctrl</kbd> + <kbd>i</kbd> = go in to the file you just checked

- <kbd>Ctrl</kbd> + <kbd>n</kbd> = go in to the next suggestion
- <kbd>Ctrl</kbd> + <kbd>p</kbd> = go in to the previous suggestion

- <kbd>\*</kbd> = Searches for the word under the cursor
- <kbd>n</kbd>, <kbd>N</kbd> = next, prev match
- <kbd>gn</kbd> = operate on this match
- <kbd>cgn</kbd> = change this match
- <kbd>Esc</kbd> + <kbd>n</kbd> + <kbd>.</kbd> = repeat on next match

- <kbd>:</kbd> + <kbd>%s</kbd> + <kbd>/String to search</kbd> + \
  <kbd>/String to replace</kbd> + <kbd>/g</kbd> = find and replace all in file

- <kbd>:%s/\n//g</kbd> = find and replace all \n in file so it turns to be one line
- <kbd>:1,$join!</kbd> = same

- <kbd>dd</kbd> = delete current line
- <kbd>cc</kbd> = remove current line, and enter insert mode

when cursor on `{` or `(` or `[`

- <kbd>%</kbd> = move cursor to closing counterpart

when in between ex. (param: typeOfParam), can type \
`])` to go to the next unmatched `)`
`[(` to go to the previous unmatched `(`

- <kbd>H</kbd> = cursor to top(high)
- <kbd>M</kbd> = cursor to middle
- <kbd>L</kbd> = cursor to bottom(low)

- <kbd>z</kbd> + <kbd>z</kbd> = center current line
- <kbd>z</kbd> + <kbd>t</kbd> = put cursor to top(like zz, then scroll till \
  cursor is in 1st line)
- <kbd>z</kbd> + <kbd>b</kbd> = put cursor to bottom (like zz, then scroll till \
  cursor is in last line)
- <kbd>Ctrl</kbd> + <kbd>e</kbd> = scroll down
- <kbd>Ctrl</kbd> + <kbd>y</kbd> = scroll up

- <kbd>shift</kbd> + <kbd>k</kbd> = show type definition

Ex.

- <kbd>c</kbd> + <kbd>i</kbd> + <kbd>w</kbd> = change in word
- <kbd>y</kbd> + <kbd>a</kbd> + <kbd>p</kbd> = yank around paragraph
- <kbd>y</kbd> + <kbd>f</kbd> + <kbd>(</kbd> = yank to and include (

- <kbd>d</kbd> + <kbd>i</kbd> + <kbd>p</kbd> = delete in paragraph
- <kbd>d</kbd> + <kbd>i</kbd> + <kbd>(</kbd> = delete in parenthesis \
  (parenthesis excluded)
- <kbd>d</kbd> + <kbd>a</kbd> + <kbd>(</kbd> = delete around parenthesis \
  (parenthesis included)
- <kbd>y</kbd> + <kbd>i</kbd> + <kbd>p</kbd> = yank in paragraph

- <kbd>n</kbd> = go to next match
- <kbd>.</kbd> = replay what is done previously

## sed

- <kbd>:</kbd> + <kbd>%</kbd> + <kbd>s</kbd> + regex (ex./Post) + <kbd>/</kbd> +
  what wants to be changed to + <kbd>/</kbd> + <kbd>g</kbd>(/g for global replacement
  /gc for interactive changing (Y/N) to control )

- <kbd>v</kbd> + <kbd>i</kbd> + <kbd>w</kbd> = highlight word
- <kbd>y</kbd> = yank the word

- Leader + <kbd>f</kbd> + <kbd>g</kbd> = telescope search word
- <kbd>Ctrl</kbd> + <kbd>q</kbd> = put the search result in quick fix
- <kbd>:</kbd> + <kbd>cdo</kbd> = execute arbitrary command in every single \
  file in the quick fix list
- `s/previous/next/gc` = substitute previous to next globally and needs confirm

So the above combo replaces all string previous to string next, and asks user confirmation

## surround

- <kbd>ys</kbd> + <kbd>motion</kbd> + <kbd>surround character</kbd> \
  = put the surround character around text

ex.

- <kbd>ys</kbd> + <kbd>iw</kbd> + <kbd>"</kbd> \
  = surround text with ""

- <kbd>ds</kbd> + <kbd>"</kbd> \
  = delete surrounding ""

- <kbd>cs</kbd> + <kbd>"</kbd> + <kbd>'</kbd> \
  = change surrounding from "" to ''

## Registers

- <kbd>:</kbd> + <kbd>reg</kbd> = list registers
- <kbd>"</kbd> + <kbd># of reg</kbd> + <kbd>p</kbd> = past content from # of register

- <kbd>"</kbd> + <kbd># of reg</kbd> + <kbd>y</kbd> = yank content to # of register

- <kbd>\* reg</kbd> = system clipboard(\* for mac, + for linux)
- <kbd>% reg</kbd> = file path

- <kbd>:let </kbd> + <kbd>@+=@%</kbd>= copy file path to system clipboard

## Macros

- <kbd>q</kbd> + <kbd># of reg</kbd> = start a macro at # of register(ex. h register)

- record actions (hopefully starts at new line so could be repeated)

- <kbd>q</kbd> to finish recording
- <kbd>@</kbd> + <kbd># of reg</kbd> = replay macro recorded at # of \
  reg (ex. for h register, @h)
- <kbd>5</kbd> + <kbd>@</kbd> + <kbd>h</kbd> = replay the macro @h register 5 times

- edit macros

- <kbd>:</kbd> + <kbd>new</kbd> = new buffer
- <kbd>:</kbd> + <kbd>put</kbd> + <kbd># of reg</kbd> = view content \
  of # register (ex. register a)

- edit register

- <kbd>"</kbd> + <kbd># of reg</kbd> + <kbd>yy</kbd> = yank updated \
  register content

- quit buffer and replay updated macro

## neo-tree

<kbd>P</kbd> = Toggle preview mode

## oil

<kbd>-</kbd> = open parent directory

## commentary

<kbd>gcc</kbd> = comment line
<kbd>3</kbd> + <kbd>gcc</kbd> = comment 3 lines
Visual Mode + <kbd>gc</kbd> = comment selected lines
<kbd>gcap</kbd> = comment around paragraph

## open file with nvim

nvim $(fzf --color=always --preview='cat {}')
