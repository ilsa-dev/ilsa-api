# ilsa-server
Nodejs - Express - Typescript

# Build
`npm install` or `yarn`

# Execute / Debug (Webstorm)

### Setup/Create Debug Profile
###Run > Edit Configurations > Add New Configuration > Select 'Node.js'
- Name the debug profile
- Set the nodejs interpreter >v8.0.0
- Set Javascriptfile = `dist/index.js`
- Add 'Before Launch' action: 'Compile Typescript'

Put in breakpoints in the .ts files and run the debug profile.


# Committing Changes

Before pushing to the repository be sure to execute the ff so we can version the changes:

`npm version patch` - If commits only updates/debug a certain feature / function
`npm version minor` - If commits has new features / function
`npm version major` - Only for major release (Client stable)

# CI Deployment

Please note that whatever you push into the 'master' branch will be automatically deployed at `api.ilsa.smiles89.com`

#### `src/App.ts`
```typescript
    private routes(): void {
        let router = express.Router();

        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });


        this.express.use('/', router);
        // this.express.use('/api/v1/data', DataRouter);
    }
```

Here is where you start defining your routes and route handlers.
Use the current example