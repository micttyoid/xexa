Xexa: React State Utility for Neither
=====================================
<!--
Part of Xexa project, under the BSD 3-Clause License.
See /LICENSE for license information.
SPDX-License-Identifier: BSD-3-Clause
-->

State for whom neither want underscore nor uppercase in convention.


## Motivation

Starting a new team project, the decision process of such coding convention 
can be omitted by [not having the problem](https://books.google.com/books?id=Ys4DAQAAIAAJ&q=%22solve+at+the+same+level%22).


## Installation

Do the follow in your react project

### For NPM
```
npm install xexa
```

### For Yarn
```
yarn add xexa
```

## Example: React Counter

```jsx
import React, { useState } from 'react'
import { digs } from 'xexa'

const Foo = () => {
    // digs - destructure into get/set
    const count = digs(useState(0))

    return (
        <div>
            <h1>Count: {count.get}</h1>
            <button onClick={() => {
                  count.set(count.get + 1)
            }}>Increment</button>
        </div>
    )
}
```
