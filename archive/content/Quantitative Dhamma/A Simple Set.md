As we have seen, it becomes clearly evident that two different types of nodes appear in our exploration: $set$ and $concept$.  
  
Let's call $S$ the set of all $sets$:  

$$\{set_{1}, set_{2},set_{3},...\}= S$$  

And $C$ the set of all $concepts$:  

$$ \{concept_{1}, concept_{2}, concept_{3}, ...\} = C $$  

In the rest of this document, we will call $item$ any $set$ or $concept$:  

$$item = \begin{cases} set \in S \\ \text{or} \\ concept \in C \end{cases}$$  

We could say that:  

$$ \bigcup_k \space item_k = I= S \cup C $$  

#### Sets   
$Sets$ contain $items$ (mostly $concepts$ and sometimes other $sets$) and represent a form of hierarchy. For example for a given $set_\mu$, we have:  

$$item_{1}, item_{2}, item_{3}, ...  \in set_\mu$$  

and then can be represented by a graph:  
  
We can build a simple hierarchical (H) relationship between the set and its items:  

$$ \begin{cases} set_\mu \to item_{1} \\ set_\mu \to item_{2} \\ set_\mu \to item_{3}  \\ ...\end{cases}$$  

$$\text{or}$$  

$$set_{\mu}\xrightarrow{H} items_\mu$$  

#### Concepts  
$Concepts$ relates (R) to other $items$ in a similar way. For a given $concept_\nu$, we have: 

$$concept_\nu \xrightarrow{R} items_\nu$$  

This will help establish a simple network of connectivity based on those relationships of H and R types.  
  
we could consider also the relationship R between sets but it is quite rare (ex: 8path 3train) and is linked via concept anyway at a higher degree.   
#### Notation  
To keep thing easy to identify, we will always start the names of $sets$ with a digit.  
  
For example, the set $3\space Cravings$ contains 3 items:   
	"*Sensuality*", "**Becoming**", "Non-Becoming"  
  
and the concept "Path" relates to items:  
	"8-Fold Path", '3-Fold Training", '"3 Pillars", "7 Purifications"   
  
TODO: add exemple that contains both type as child  
  
Note that in common literature, we call items: node or vortex. Edges are their relations (contains or relates).  
  
### Two Approches  
  
1) Relationship (for Concepts)  
  
Graph Example: Vertex, edges  
  
2) Hierarchy (for Sets)  
  
Graph Example: Tree like structure, children  
  
### Conclusion  
  
We have to deal with a mix.