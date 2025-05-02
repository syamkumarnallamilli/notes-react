<a href="https://example.com" target="_blank" rel="noopener noreferrer">Example</a>

🔒 rel="noopener" — Security
When you open a link in a new tab (target="_blank"), the new page gets access to your current page via a property called window.opener.
This means the new tab can potentially run JavaScript that modifies or redirects your original page, which is a security risk.

Adding rel="noopener":

Breaks the connection between the new tab and the original tab.

Prevents the new page from being able to use window.opener.

Keeps your site secure from malicious pages.

🔐 rel="noreferrer" — Privacy
This prevents the browser from sending the referring page URL (your site) to the new site.

So:

The destination site won’t know where the visitor came from.

It's useful for privacy.

✅ Best Practice for External Links
When you're linking to external sites with target="_blank", always include:

html
Copy
Edit
rel="noopener noreferrer"
This protects your app from:

🔓 Security vulnerabilities

🕵️ Privacy leaks

