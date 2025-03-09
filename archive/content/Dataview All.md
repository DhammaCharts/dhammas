add `, join(flat(items.aliases), ",<br>") as "ItemPali"` for pali items

```
table 
	string(aliases) as Pali,
	acro as Acro,
	replace(split(file.path, "/")[1], "s","") as Type, 
	string(tags) as Tags, join(items, ",<br>") as Items
from "Dhammas/Sets"
where length(aliases)>=0
sort number(file.name)
```


```dataview
table 
	join(items, ",<br>") as Items
from "Dhammas"
sort number(file.name)
```