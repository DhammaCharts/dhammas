---
title: Home
---
Hi, there is a lot of stuff on this vault. 

This Obsidian Vault aims at storing all information for Dhamma Charts.

First, you should have it download locally from https://github.com/DhammaCharts/dhammas and browse the content folder locally with Obsidian with the root "content"

You can install dataView plugin to see the result of the tables.

The goal is to create a clean data based that can be queried and export to make graph analysis. 

Check [[SUMMARY]] to see what would be possible to create. 

### Two different Types of node

The way this vault is set is explained in [[A Simple Set]]

These are separated via folder method:
- Sets
- Concepts 

Note: "s" are removed in tagging at [[Dataview All]]

The properties are what makes it queryable and interesting.
### Properties of a node

These are set in the front matter of the md file:
- asliases: pali variants of the title
- tags:
	- suffering
	- origin
	- cessation
	- path
	- core
		- Core set or concept
	- monk
		- Apply to monastic training
	- 1sutta
		- Appear in only one sutta
	- comm
		- Appear only in the commentarial literature
- items: list all the items of the "set" node (as link to nodes). This is only the direct child of the node. Other mentions or relations (parent, etc.) can appear as outgoing link from the content.  Items should be kept as short and simple as possible referring to one unique Pali translation.

Properties below are actually equivalent to items, because sets and nodes are not that different.
- relates: node ==relates== to other nodes (used items ?)
- conditions: node ==conditiones== other nodes (use items ?)

Content would be nice to have with sutta reference and source.

Check [[To do]] for what need to be done.

Note: Division Dhamma Content & Vinaya/Sangha Content (gradual training, qualities of a monk, etc.) 

There is a parallel set of qualities that runs in the same direction as the Noble eightfold Path and that is more specific to monastics: 15 steps gradual path, qualities of a monk, livelihood of a monk, Vinaya rules, speech of a monk, etc. Theses sets of qualities more specifics to the monastic life do not appear in this vault (tag "monk" could be an option) 
## Exporting to D3

See [[Dataview All]] with Plugin  export to CSV to be able to use the stratify methode to create a Hierarchy

Format is :

- Name: file.name (digit + short word title cased)
- Pali: string(file.aliases), (no number or digit + short pali title cased)
- Type: parent folder = Set or Concept
- Tags: see above
- Items: items (CSV of file.name), //we can make string array as well
- ItemsPali: (not neccesary but conveniant to see on the list)

See Notebook for tentative script of level generated tidy tree or dedrogram.

## Chart
In obsdician, with the nice tag color, you can get

![[Pasted image 20250309181718.png]]

Or you can make this kind of chart

![[Pasted image 20250309181823.png]]

Or buddha brain on dhammacharts. 

![[Pasted image 20250309181230.png]]

This would bay one way to do it dependant on the root.

![[DhammasChart1_13 1.png]]
### Notes

- Synonym for bible
- logo 4 Noble truth
- obsidian based
- 3 kinds of sotapanna
- 3 enlightened beings
- 8 Births A.iv,239
- List in Reading Faithfully AN
- Name and Form Group
- 12 Ayatana
- 4 Bias
- 10 Power of the Buddha
- 4 kinds of fearlessness
- 8 Things to give to a true person
- Bhikkhu Manual List
- 9 Things rooted in craving DN15
- Types of sankhara
   - Imperturbable
- Samadhi (light, beautiful, imperturbable)
- 2 Extremes
- Anupuba Nirodha
- anupada jhana factor
- link relative by name
- title as name file
- rest parametre
- sutta pitaka parralels
- Treasure
- 5 Wrong sexual misconduct
- Adhitthana
- Duthanga (monk)
- list DN 32+33
- list leigt breisington path monk
- bhikkhu manual 
- List of Pali Number