A Simple Matter of Name

I have a quiz for you. What is the namespace of attribute 'attr' in this XML document?

  <?xml version="1.0" encoding="UTF-8"?>
  <doc xmlns="urn:a" xmlns:b="urn:b">
    <b:elem attr="value" />
  </doc>

My first thought was that, of course, it is the default namespace of the document. That is, the attribute with the local name of 'attr' has a namespace name of 'urn:a'.

But when reviewing the XML-Names[xml-names] spec, it seems that defaulting[defaulting] is a bit more complicated for attributes. It says, "Default namespace declarations do not apply directly to attribute names; the interpretation of unprefixed attributes is determined by the element on which they appear."

So you might infer that the namespace of an unprefixed attribute is the same as the element that it appears on. That is, the attribute with the local name of 'attr' has a namespace name of 'urn:b'.

But reading further you would see, "The namespace name for an unprefixed attribute name always has no value." That is, the attribute with the local name of 'attr' has no namespace name at all.

That means that XPaths are pretty much insane. Consider the following documents

    <?xml version="1.0" encoding="UTF-8"?>
    <doc xmlns="urn:a">
      <elem attr="value" />
    </doc>
    
    <?xml version="1.0" encoding="UTF-8"?>
    <a:doc xmlns:a="urn:a">
      <a:elem a:attr="value" />
    </a:doc>

If you try to apply the XPath '//*[@*[namespace-uri()='urn:a' and local-name()='attr']]'. 



[xml-names]: http://www.w3.org/TR/REC-xml-names
[defaulting]: http://www.w3.org/TR/REC-xml-names/#defaulting