# List of all Sets

```dataview
list 
from "Dhammas/Sets"
sort number(file.name)
limit 10
```
# Table with relationship

```dataview
list 
from "Dhammas/Sets"
where length(file.outlinks) != length(items)
sort number(file.name)
```

# With Pali Names

```dataview
list " (" + file.aliases + ")"
from "Dhammas/Sets"
where length(aliases)>0
sort number(file.name)

```

## List with Pali, Item, Pali

```dataview
table aliases as Pali, items, flat(items.aliases) as " Pali"
from "Dhammas/Sets"
flatten aliases
where length(aliases)>0
sort number(file.name)
```


## Flattened with full lines

```dataview
table string(aliases) as Pali, items, string(items.aliases) as " Pali"
from "Dhammas/Sets"
flatten items
where length(aliases)>0
sort number(file.name)
```
## Flattened as string with param as CSV

```dataview
table string(aliases) as Pali, split(file.path, "/")[1] as Type, string(tags) as Tags, string(items) as Items, string(flat(items.aliases)) as "ItemPali"
from "Dhammas/Sets"
where length(aliases)>0
sort number(file.name)
```


## Flattened with `<br>`

```dataview
table string(aliases) as Pali, join(items, "<br>") as Items, join(flat(items.aliases), "<br>") as " Pali"
from "Dhammas"
where length(aliases)>0
sort number(file.name)
```



## Testing

```dataview
TABLE rows.OUT AS Unresolved FLATTEN file.outlinks AS OUT WHERE !OUT.file AND !(contains(meta(OUT).path, "/")) GROUP BY file.link AS Source
```

### Testing 2

```dataviewjs
let r = Object.entries(dv.app.metadataCache.unresolvedLinks) .filter(([k,v])=>Object.keys(v).length) .flatMap(([k,v]) => Object.keys(v) .map(x=>dv.fileLink(x))) dv.list([...new Set(r)])
```