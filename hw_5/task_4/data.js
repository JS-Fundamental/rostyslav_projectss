const fullText = [
  'The Single-responsibility principle: "There should never be more than one reason for a class to change." In other words, every class should have only one responsibility.',
  'The Open closed principle: "Software entities ... should be open for extension, but closed for modification."',
  'The Liskov substitution principle: "Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it."',
  'The Interface segregation principle: "Clients should not be forced to depend upon interfaces that they do not use."',
  'The Dependency inversion principle: "Depend upon abstractions, [not] concretions." '
];

const principles = document.querySelectorAll('div');
for (let i = 0; i < fullText.length; i++) {
  principles[i].append(fullText[i]);
}
