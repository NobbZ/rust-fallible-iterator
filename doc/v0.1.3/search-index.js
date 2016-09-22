var searchIndex = {};
searchIndex["fallible_iterator"] = {"doc":"&quot;Fallible&quot; iterators.","items":[[3,"AndThen","fallible_iterator","An iterator which applies a fallible transform to the elements of the\nunderlying iterator.",null,null],[3,"Chain","","An iterator which yields the elements of one iterator followed by another.",null,null],[3,"Cloned","","An iterator which clones the elements of the underlying iterator.",null,null],[3,"Convert","","A fallible iterator that wraps a normal iterator over `Result`s.",null,null],[3,"Enumerate","","An iterator that yields the iteration count as well as the values of the\nunderlying iterator.",null,null],[3,"Filter","","An iterator which uses a predicate to determine which values of the\nunderlying iterator should be yielded.",null,null],[3,"FilterMap","","An iterator which both filters and maps the values of the underlying\niterator.",null,null],[3,"Fuse","","An iterator that yields `Ok(None)` forever after the underlying iterator\nyields `Ok(None)` once.",null,null],[3,"Iterator","","A normal (non-fallible) iterator which wraps a fallible iterator.",null,null],[3,"Map","","An iterator which applies a transform to the elements of the underlying\niterator.",null,null],[3,"MapErr","","An iterator which applies a transform to the errors of the underlying\niterator.",null,null],[3,"Peekable","","An iterator which can look at the next element without consuming it.",null,null],[3,"Rev","","An iterator which yields elements of the underlying iterator in reverse\norder.",null,null],[3,"Take","","An iterator which yields a limited number of elements from the underlying\niterator.",null,null],[3,"Zip","","An iterator that yields pairs of this iterator&#39;s and another iterator&#39;s\nvalues.",null,null],[5,"convert","","Converts an `Iterator&lt;Item = Result&lt;T, E&gt;&gt;` into a `FallibleIterator&lt;Item = T, Error = E&gt;`.",null,{"inputs":[{"name":"i"}],"output":{"name":"convert"}}],[8,"FallibleIterator","","An `Iterator`-like trait that allows for calculation of items to fail.",null,null],[16,"Item","","The type being iterated over.",0,null],[16,"Error","","The error type.",0,null],[10,"next","","Advances the iterator and returns the next value.",0,null],[11,"size_hint","","Returns bounds on the remaining length of the iterator.",0,null],[11,"all","","Determines if all elements of this iterator match a predicate.",0,null],[11,"and_then","","Returns an iterator which applies a fallible transform to the elements\nof the underlying iterator.",0,null],[11,"any","","Determines if any element of this iterator matches a predicate.",0,null],[11,"by_ref","","Borrow an iterator rather than consuming it.",0,null],[11,"chain","","Returns an iterator which yields the elements of this iterator followed\nby another.",0,null],[11,"cloned","","Returns an iterator which clones all of its elements.",0,null],[11,"count","","Consumes the iterator, returning the number of remaining items.",0,null],[11,"collect","","Transforms the iterator into a collection.",0,null],[11,"enumerate","","Returns an iterator which yields the current iteration count as well\nas the value.",0,null],[11,"filter","","Returns an iterator which uses a predicate to determine which values\nshould be yielded.",0,null],[11,"filter_map","","Returns an iterator which both filters and maps.",0,null],[11,"find","","Returns the first element of the iterator that matches a predicate.",0,null],[11,"fuse","","Returns an iterator which yields this iterator&#39;s elements and ends after\nthe first `Ok(None)`.",0,null],[11,"fold","","Applies a function over the elements of the iterator, producing a single\nfinal value.",0,null],[11,"iterator","","Returns a normal (non-fallible) iterator over `Result&lt;Item, Error&gt;`.",0,null],[11,"last","","Returns the last element of the iterator.",0,null],[11,"map","","Returns an iterator which applies a transform to the elements of the\nunderlying iterator.",0,null],[11,"map_err","","Returns an iterator which applies a transform to the errors of the\nunderlying iterator.",0,null],[11,"max","","Returns the maximal element of the iterator.",0,null],[11,"max_by_key","","Returns the element of the iterator which gives the maximum value from\nthe function.",0,null],[11,"min","","Returns the minimal element of the iterator.",0,null],[11,"min_by_key","","Returns the element of the iterator which gives the minimum value from\nthe function.",0,null],[11,"nth","","Returns the `n`th element of the iterator.",0,null],[11,"peekable","","Returns an iterator that can peek at the next element without consuming\nit.",0,null],[11,"position","","Returns the position of the first element of this iterator that matches\na predicate.",0,null],[11,"rev","","Returns an iterator that yields this iterator&#39;s items in the opposite\norder.",0,null],[11,"take","","Returns an iterator that yields only the first `n` values of this\niterator.",0,null],[11,"zip","","Returns an iterator that yields pairs of this iterator&#39;s and another\niterator&#39;s values.",0,null],[11,"cmp","","Lexicographically compares the elements of this iterator to that of\nanother.",0,null],[11,"partial_cmp","","Lexicographically compares the elements of this iterator to that of\nanother.",0,null],[11,"eq","","Determines if the elements of this iterator are equal to those of\nanother.",0,null],[11,"ne","","Determines if the elements of this iterator are not equal to those of\nanother.",0,null],[11,"lt","","Determines if the elements of this iterator are lexicographically less\nthan those of another.",0,null],[11,"le","","Determines if the elements of this iterator are lexicographically less\nthan or equal to those of another.",0,null],[11,"gt","","Determines if the elements of this iterator are lexicographically\ngreater than those of another.",0,null],[11,"ge","","Determines if the elements of this iterator are lexicographically\ngreater than or equal to those of another.",0,null],[8,"DoubleEndedFallibleIterator","","A fallible iterator able to yield elements from both ends.",null,null],[10,"next_back","","Advances the end of the iterator, returning the last value.",1,null],[8,"FromFallibleIterator","","Conversion from a fallible iterator.",null,null],[10,"from_fallible_iterator","","Creates a value from a fallible iterator.",2,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[8,"IntoFallibleIterator","","Conversion into a `FallibleIterator`.",null,null],[16,"Item","","The elements of the iterator.",3,null],[16,"Error","","The error value of the iterator.",3,null],[16,"IntoIter","","The iterator.",3,null],[10,"into_fallible_iterator","","Creates a fallible iterator from a value.",3,null],[11,"next","alloc::boxed","",4,null],[11,"size_hint","","",4,null],[11,"next_back","","",4,null],[11,"from_fallible_iterator","collections::vec","",5,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[11,"from_fallible_iterator","std::collections::hash::set","",6,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[11,"from_fallible_iterator","std::collections::hash::map","",7,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[11,"from_fallible_iterator","collections::btree::set","",8,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[11,"from_fallible_iterator","collections::btree::map","",9,{"inputs":[{"name":"i"}],"output":{"name":"result"}}],[11,"fmt","fallible_iterator","",10,null],[11,"next","","",10,null],[11,"size_hint","","",10,null],[11,"fmt","","",11,null],[11,"next","","",11,null],[11,"size_hint","","",11,null],[11,"count","","",11,null],[11,"next_back","","",11,null],[11,"fmt","","",12,null],[11,"next","","",12,null],[11,"size_hint","","",12,null],[11,"count","","",12,null],[11,"next_back","","",12,null],[11,"fmt","","",13,null],[11,"next","","",13,null],[11,"size_hint","","",13,null],[11,"next_back","","",13,null],[11,"fmt","","",14,null],[11,"next","","",14,null],[11,"size_hint","","",14,null],[11,"count","","",14,null],[11,"fmt","","",15,null],[11,"next","","",15,null],[11,"size_hint","","",15,null],[11,"next_back","","",15,null],[11,"fmt","","",16,null],[11,"next","","",16,null],[11,"size_hint","","",16,null],[11,"next_back","","",16,null],[11,"fmt","","",17,null],[11,"next","","",17,null],[11,"size_hint","","",17,null],[11,"count","","",17,null],[11,"fmt","","",18,null],[11,"next","","",18,null],[11,"size_hint","","",18,null],[11,"next_back","","",18,null],[11,"fmt","","",19,null],[11,"next","","",19,null],[11,"size_hint","","",19,null],[11,"count","","",19,null],[11,"next_back","","",19,null],[11,"fmt","","",20,null],[11,"next","","",20,null],[11,"size_hint","","",20,null],[11,"count","","",20,null],[11,"next_back","","",20,null],[11,"fmt","","",21,null],[11,"peek","","Returns a reference to the next value without advancing the iterator.",21,null],[11,"next","","",21,null],[11,"size_hint","","",21,null],[11,"fmt","","",22,null],[11,"next","","",22,null],[11,"size_hint","","",22,null],[11,"count","","",22,null],[11,"next_back","","",22,null],[11,"fmt","","",23,null],[11,"next","","",23,null],[11,"size_hint","","",23,null],[11,"fmt","","",24,null],[11,"next","","",24,null],[11,"size_hint","","",24,null]],"paths":[[8,"FallibleIterator"],[8,"DoubleEndedFallibleIterator"],[8,"FromFallibleIterator"],[8,"IntoFallibleIterator"],[3,"Box"],[3,"Vec"],[3,"HashSet"],[3,"HashMap"],[3,"BTreeSet"],[3,"BTreeMap"],[3,"AndThen"],[3,"Chain"],[3,"Cloned"],[3,"Convert"],[3,"Enumerate"],[3,"Filter"],[3,"FilterMap"],[3,"Fuse"],[3,"Iterator"],[3,"Map"],[3,"MapErr"],[3,"Peekable"],[3,"Rev"],[3,"Take"],[3,"Zip"]]};
initSearch(searchIndex);
