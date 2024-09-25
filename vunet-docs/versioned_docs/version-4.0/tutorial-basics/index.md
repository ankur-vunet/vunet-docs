---
title: Tutorial Basics Modified
sidebar_position: 3
---

# Tutorial Basics Copy

This is a sample page, which comes up on clicking the folder name.
This content will show along with dropdown on index.

- File name should be index.md
- front matter should be as follows:
```
---
title: Tutorial Basics Modified
sidebar_position: 3
---
```
:::note
Set Title what you want to see on left side index.
:::

## Adding Sub chapter card list:
To add below kind of structure add following in the md file:
```
import DocCardList from '@theme/DocCardList';
<DocCardList />
```

import DocCardList from '@theme/DocCardList';

<DocCardList />