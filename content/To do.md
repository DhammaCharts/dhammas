- [ ] Review the sets and fill them out
- [ ] Review the concepts and their links to sets and node
- [ ] Add Core I, Core II tag
- [ ] Add acro: 5 letters max all Caps ？6GPATH
- [ ] Mathematic symbols for [[Quatitative Dhamma]]
## List of sets without items (first 10)
```dataview
list 
from "Dhammas/Sets"
where length(items)<number(file.name) and number(file.name)>3
sort number(file.name)
limit 10
```
## Clean node's content of links 

```dataview
list 
from "Dhammas"
where length(file.outlinks)-length(items)>0
sort number(file.name)
```

## List of nodes without pali equivalent (first 10)

```dataview
list 
from "Dhammas"
where length(aliases)=0
sort number(file.name)
limit 10
```