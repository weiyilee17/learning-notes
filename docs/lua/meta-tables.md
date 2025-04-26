---
sidebar_position: 4
---

# Meta tables

like dunder methods in python

```lua
local vector_mt = {}

vector_mt.__add = function(left, right)
  return setmetatable({
    left[1] + right[1],
    left[2] + right[2],
    left[3] + right[3],
  }, vector_mt)
end

local v1 = setmetatable({3, 1, 5}, vector_mt)
local v2 = setmetatable({-3, 2, 2}, vector_mt)

local v3 = v1 + v2
```

```lua
local fib_mt = {
  -- index is called when there is no key in the table
  __index = function(self, key)
    if key < 2 then
      return 1
    end

    -- Update the table to save the intermediate results
    self[key] = self[key - 2] + self[key - 1]

    return self[key]
  end
}

-- {} is self
local fib = setmetatable({}, fib_mt)

print(fib[5])
-- works because previous values are stored in table
print(fib[1000])

```

```lua
-- __newindex(self, key, value)
-- __call(self, ...)

```
