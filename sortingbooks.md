# Sorting Books

## Question

Imagine that I gave you twenty books to sort in alphabetical order.

How would you go about it?

Can you express this as an algorithm?

### Answer

I would group each book by using the authors last name, the first letter of one against the first letter of another. If two characters are the same, compare the following pairs until there is either a mismatch based on the characters alphabet index, or one word runs out of characters.

An algorithm could be expressed as follows...

In the fashion of a bubble sort...

1. For each book
    - Compare it to the following book, by comparing last name character pairs.
	- Swap book if whose last name at the current character is greater than that of the other last name.