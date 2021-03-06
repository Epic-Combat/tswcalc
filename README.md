tswcalc
=======

tswcalc is intended to be a fan-made living talisman and glyph calculator for The Secret World (TSW), a MMORPG by Funcom. It can be used to plan how to spend your Black Bullions, Criterion Upgrades and Astral Fuses. In addition to share and show others what gear you use to tackle encounters in PvE or PvP.

tswcalc contains all Nightwatch custom gear and glyphs from QL 10.0 to 10.5. It also has all signets in normal, elite and epic variations. 

tswcalc can be found at: http://joakibj.github.io/tswcalc

Note: all active development of tswcalc takes place in the [`develop`](https://github.com/joakibj/tswcalc/tree/develop) branch. Stable releases are merged into [`master`](https://github.com/joakibj/tswcalc/tree/master).

Installing
--------
tswcalc uses [grunt](http://gruntjs.com/) to build. 
It uses `dustjs` (`linkedin-dustjs` fork) as a client-side template engine. Tests are covered by `qunit` and performed in each build.

The tools needed to build tswcalc are:
* [node.js](http://nodejs.org/) (v0.10.5+)
* npm (v1.2.18+)
* grunt (v0.4.0+)

node.js comes included with `npm`, the node package manager.

Install grunt globally:

    npm install -g grunt-cli

Install tswcalc dependencies, defined in `package.json`:

    npm install

Building
--------
Build tswcalc by running:

    grunt

When developing, use:
    
    grunt watch

The previous command monitors changes to files in the `src` folder. If any changes are detected, the build task is run.

Open `build/index.html` to view.

Distribution
------------
To create a distribution in the `dist` folder: 

    grunt dist

Open `dist/index.html` to view.

License
-------
MIT License for the source code. Please see the LICENSE file.

All art assets included in `public/assets/images/icons/` folder are taken from [The Secret World™ Chronicle](http://chronicle.thesecretworld.com/). The artwork should be considered property of Funcom GmBH unless otherwise noted. A small sample of signet, glyph and item icons are redistributed under fair use.
