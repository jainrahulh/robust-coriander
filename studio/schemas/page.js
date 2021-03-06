export default {
    "type": "document",
    "name": "page",
    "title": "Page",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown below the page title",
            "validation": null
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image shown below the page title",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo-tools', // use seo-tools type
            options: {
                baseUrl: '', // (REQUIRED) This is the baseUrl for your site
                baseUrl(doc) {
                    return ''; // for dynamic baseUrls
                },
                slug(doc) { // (REQUIRED) a function to return the sug of the current page, which will be appended to the baseUrl
                    //return doc.slug.current;
                    return '';
                },
                fetchRemote: true, // Can be set to false to disable fetching the remote source (you will need to pass the content helpers for analysis)
                content(doc) {
                    return 'simple html representation of your doc'; // (OPTIONAL) If your site is generated after Sanity content updates you can use this for better real time feedback
                },
                title(doc) {
                    return 'page title'; // (OPTIONAL) return page title otherwise inferred from scrape
                },
                description(doc) {
                    return 'page description'; // (OPTIONAL) return page description otherwise inferred from scrape
                },
                locale(doc) {
                    return 'page locale'; // (OPTIONAL) return page locale otherwise inferred from scrape
                },
                contentSelector: 'body' // (OPTIONAL) option to finetune where Yoast will look for the content. (only applicable for scraping without content function)
            },
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}
