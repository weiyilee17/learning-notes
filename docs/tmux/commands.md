# Keyboard shortcuts

Leader = <kbd>Ctrl</kbd> + <kbd>b</kbd>
remapped Leader to <kbd>Ctrl</kbd> + <kbd>s</kbd> in .tmux.conf

- Leader + <kbd>c</kbd> = Create a new window
- Leader + <kbd>n</kbd> = Move to next window
- Leader + <kbd>p</kbd> = Move to previous window
- Leader + <kbd>1</kbd> = Move to window 1
- Leader + <kbd>%</kbd> = Split window vertically,
  into left and right pane (re-bind to |)
- Leader + <kbd>"</kbd> = Split window horizontally,
  into top and bottom pane (re-bind to -)

- Leader + arrow to navigate between panes

- Leader + <kbd>:</kbd> = Change to command mode
- - rename-window [new window name]
- - rename-session [new session name]

- Leader + <kbd>d</kbd> = Detach tmux session, back to terminal

- (in terminal) tmux ls = list all tmux sessions
- (in terminal) tmux attach = attach back to tmux session
- (in terminal) tmux = create a new tmux session

- Leader + <kbd>s</kbd> = list tmux sessions
- Leader + <kbd>w</kbd> = list tmux sessions and windows

<!-- \ is like <br/> -->

config at ~/.tmux.conf\
after adding r rebind in .tmux.conf,
Leader + <kbd>r</kbd> = reload tmux config file

- Leader + <kbd>I</kbd> = Install plugins listed in tmux plugin manager(tpm)

Plugins are in ~/.tmux/plugins

## Copy mode

- Leader + <kbd>[</kbd> = Enter copy mode (or scroll)

- Can use vim motions to navigate
- <kbd>shift</kbd> + <kbd>j, k</kbd> to keep cursor in same position
- Can use <kbd>v</kbd>, <kbd>y</kbd> to highlight, copy, just like vim

- <kbd>Ctrl</kbd> + <kbd>u, d</kbd> to go up or down half page
- <kbd>Ctrl</kbd> + <kbd>b, f</kbd> to go up or down full page
- <kbd>Ctrl</kbd> + <kbd>c</kbd> to exit copy mode

## terminal with fzf, not tmux specific

- nvim + <kbd>ctrl</kbd> + <kbd>t</kbd> = opens fzf interface to find file or\
  directory to open

- cd + <kbd>\*\*</kbd> + <kbd>tab</kbd> = opens fzf interface to find file or\
  directory to open

- nvim + <kbd>\*\*</kbd> + <kbd>tab</kbd> = same

- <kbd>ctrl</kbd> + <kbd>r</kbd> = show command history

### terminal with lazygit, not tmux specific

- <kbd>1 ~ 5</kbd> = focus on certain block
- <kbd>h, l</kbd> = go to next / prev block
- <kbd>?</kbd> = show key bindings
- <kbd>/</kbd> + <kbd>filter text</kbd> = search through keybindings list

#### Files

- <kbd>d</kbd> = discard all changes
- <kbd>D</kbd> = more options
- <kbd>space</kbd> = toggle staged
- <kbd>enter</kbd> + <kbd>space</kbd> on certain line = enter file and \
  stage specific hunk

- <kbd>tab</kbd> + <kbd>d</kbd> on certain line = go to staged hunk and deselect

- <kbd>c</kbd> = commit changes
- <kbd>tab</kbd> = switch focus to commit description
- <kbd>P</kbd> = push to origin
- <kbd>p</kbd> = pull from origin

#### Local Branches

- <kbd>n</kbd> = create new branch
- <kbd>o</kbd> = open pr

#### Rebase

While checked out on branch, highlight main branch and press \
<kbd>r</kbd> to rebase

#### Conflicts

- <kbd>enter</kbd> = enter conflict file
- <kbd>space</kbd> = select current or incoming
- <kbd>e</kbd> = edit current file

#### Commits

- <kbd>e</kbd> = interactive rebase
- <kbd>ctrl</kbd> + <kbd>j, k</kbd> = swap order
- <kbd>m</kbd> = rebase options

##### Cherry pick

- <kbd>c</kbd> on commit = copy
- switch to brach and <kbd>p</kbd> = paste to brach

##### Stash Conflicts (git stuff, not related to lazy git)

- Solve merge conflict
- Save
- Commit
- git reset HEAD^
- git stash drop stash@{0}
