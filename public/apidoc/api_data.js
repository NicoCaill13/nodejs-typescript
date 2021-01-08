define({ "api": [
  {
    "type": "get",
    "url": "/spartan/:id",
    "title": "get one spartan",
    "description": "<p>affiche le détail d'un spartiate</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id du spartiate</p>"
          }
        ]
      }
    },
    "group": "Spartans",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/App/Spartans/Spartans.ts",
    "groupTitle": "Spartans",
    "name": "GetSpartanId"
  },
  {
    "type": "get",
    "url": "/spartans",
    "title": "list of all spartans",
    "description": "<p>affiche la liste de tous les spartiates</p>",
    "group": "Spartans",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/App/Spartans/Spartans.ts",
    "groupTitle": "Spartans",
    "name": "GetSpartans"
  }
] });
