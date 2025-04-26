---
sidebar_position: 3
---

# Modules

```lua
-- foo.lua

local M = {}
M.cool_function = function() end

return M

-- bar

local foo = require('foo')
foo.cool_function()
```
