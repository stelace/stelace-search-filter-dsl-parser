# Stelace plugin: search filter DSL parser

This [Stelace API server](//github.com/stelace/stelace) plugin enables [advanced filtering in Search API (docs)](//stelace.com/docs/search/#filtering), using a dedicated Domain-Specific Language parsed with [PEG.js](https://pegjs.org/).

[![CircleCI](https://circleci.com/gh/stelace/stelace-search-filter-dsl-parser.svg?style=svg&circle-token=225eee24fa294266d7205a8999567aa28f714496)](https://circleci.com/gh/stelace/stelace-search-filter-dsl-parser)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-yellow.svg)](https://standardjs.com)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> For instructions about using and developing Stelace plugins, have a look at [server docs](https://github.com/stelace/stelace/blob/dev/docs/plugins.md).

## Tests and development

Install plugin dependencies:

```sh
yarn
```

Databases should be up and running. You can use stelace-server installed as a dependency for tests and development:

```sh
# not needed if you’re already running stelace-server databases
yarn --cwd node_modules/stelace-server/ run docker:db
```

Please also ensure that additional stelace-server plugins specified in the server environment variable `INSTALLED_PLUGINS` are installed:

```sh
yarn plugins:server
```

### Run tests

```sh
yarn test
```

Run plugin tests _and_ all server tests with `yarn test:server`.

## License

© Stelace 2019-present

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

A copy of the GNU General Public License is included in this program,
and is also available at [https://www.gnu.org/licenses/gpl-3.0.txt](
  https://www.gnu.org/licenses/gpl-3.0.txt).
