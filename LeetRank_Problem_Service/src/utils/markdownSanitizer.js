const marked = require('marked');
const sanitizeHTMLLibrary = require('sanitize-html');
const TurndownService = require('turndown');





function santizedMarkdownContent(markdownContent){
    const turndownService = new TurndownService();
    // 1. convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted HTML" ,convertedHtml);

    // 2. sanitize html
    const sanitizedHtml = sanitizeHTMLLibrary(convertedHtml, {
        allowedTags : sanitizeHTMLLibrary.defaults.allowedTags.concat(['img'])
    });

    console.log("SanitizedHtml" ,sanitizedHtml);

    // 3. Convert the sanitized html back to markdown
   const sanitizedMarkdown =  turndownService.turndown(sanitizedHtml);

   console.log("sanitizedMarkDown",sanitizedMarkdown);
   return sanitizedMarkdown;
}

// const input = `
// # Hello world

// ### this is a markdown

// - something
// <script>alert('wohoooo')</script>

// [Link](www.google.com)


// `;

// santizedMarkdownContent(input);

// initial html converted 

/* <h1>Hello world</h1>
<h3>this is a markdown</h3>
<ul>
<li>something<script>alert('wohoooo')</script></li>
</ul>
<p><a href="www.google.com">Link</a></p> */

// sanitized html
/* <h1>Hello world</h1>
<h3>this is a markdown</h3>
<ul>
<li>something</li>
</ul>
<p><a href="www.google.com">Link</a></p> */

module.exports = santizedMarkdownContent;
