---
sidebar_position: 1
---

# Lua

## Comments

```lua
-- This is a comment, it starts with 2 dashes

--[[
This is multiple line comments
just like /* */
--]]
```

## Variables

```lua
-- local are kind of like var that gets the type
-- strings can be wrapped with "" or ''
-- ; are not needed at the end of line, like js and python

local crazy = [[ This is
multiline and literal
]]

-- supports assigning multi value in 1 line
local truth, lies = true, false

-- nil is null
local nothing = nil
```

## Function param shorthands

```lua
local single_string = function(s)
  return s .. "- WOW!"
end

local x = single_string('hi')
-- if only 1 param, can call without () as well
-- ONLY WORKS with string and table
local y = single_string 'hi'
print(x, y) -- Same
```

## Table Shorthand

```lua
local setup = function(opts)
  if opts.default == nil then
    opts.default = 17
  end

  print(opts.default, opts.other)
end

-- 12, false
setup {default = 12, other = false}
-- 17, true
setup {other = true}
```

## Functions

```lua
-- There are 2 ways of defining functions

local function hello(name)
  print('Hello', name)
end

local greet = function(name)
  -- .. is string concatenation
  print('Greetings, ' .. name .. '!')
end

local higher_order = function(value)
  return function(another)
    return value + another
  end
end

local add_one = higher_order(1)
print('add_one(2) ->', add_one(2))
```

```lua
local return_four_values = function()
  return 1, 2, 3, 4
end

-- 4 is discarded
first, second, third = return_four_values()

```

```lua
local variable_arguments = function(...)
  local arguments = { ... }

  for i, v in ipairs({...}) do
    print(i, v)
  end

  return unpack(arguments)
end

-- hello world !
print('print all', variable_arguments('hello', 'world', '!'))
-- hello <lost>
print('lost', variable_arguments('hello', 'world', '!'), '<lost>')
```

## Tables

```lua
-- As a list
local list = {'first', 2, false, function() print('forth!') end}
print('Yup, 1-indexed:', list[1])
print('Forth is 4...', list[4]())

-- As a map
local t = {
  literal_key = 'a string',
  ['an expression'] = 'also works',
  [function() end] = true
}

print('literal_key:', t.literal_key)
print('an expression:', t['an expression'])
-- Would be empty. Although the 2 functions have same content, addresses are different
print('function() end:', t[function() end])

```

## Syntax sugar

```lua
local myTable = {}

-- Both are the same
function myTable.something(self, ...) end
function myTable:something( ...) end
```
