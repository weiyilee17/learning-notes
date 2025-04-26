---
sidebar_position: 2
---

# Control flow

## Loops

```lua
local favorite_accounts = {'teej_dv', 'The Primeagen', 'terminaldotshop'}
-- for start, stop. # is for the length(only works for array)
for index = 1, #favorite_accounts do
  print(index, favorite_accounts[index])
end

for index, value in ipairs(favorite_accounts) do
  print(index, value)
end
--[[
Both print the same output
1 teej_dv
2 The Primeagen
3 terminaldotshop
--]]

local reading_scores = { teej_dv = 9.5, ThePrimeagen = 'N/A'}
-- for maps, use pairs instead of ipairs
for key, value in pairs(reading_scores) do
  print(key, value)
end
```

## Ifs

```lua
local function action(loves_coffee)
  if loves_coffee then
    print("Check out `ssh terminal.shop` - it's cool!")
  else
    print("Check out `ssh terminal.shop` - it's still cool!")
  end
end

-- 'falsy': nil, false
action() -- Same as action(nil)
action(false)

-- Everything else is truthy
action(true)
action(0)
action({})
```
