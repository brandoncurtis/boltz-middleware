# 1.0.0-beta (2019-04-27)


### Bug Fixes

* add CORS headers ([#12](https://github.com/BoltzExchange/boltz-middleware/issues/12)) ([9c51797](https://github.com/BoltzExchange/boltz-middleware/commit/9c51797))
* add X-Accel-Buffering header ([#39](https://github.com/BoltzExchange/boltz-middleware/issues/39)) ([2a6fdcb](https://github.com/BoltzExchange/boltz-middleware/commit/2a6fdcb))
* amount of BIP21 payment requests ([#42](https://github.com/BoltzExchange/boltz-middleware/issues/42)) ([0feb8c4](https://github.com/BoltzExchange/boltz-middleware/commit/0feb8c4))
* better error message for non final transactions ([#85](https://github.com/BoltzExchange/boltz-middleware/issues/85)) ([06dee96](https://github.com/BoltzExchange/boltz-middleware/commit/06dee96))
* catch body-parser errors ([#86](https://github.com/BoltzExchange/boltz-middleware/issues/86)) ([16f4622](https://github.com/BoltzExchange/boltz-middleware/commit/16f4622))
* catch Discord errors ([#74](https://github.com/BoltzExchange/boltz-middleware/issues/74)) ([0826ad4](https://github.com/BoltzExchange/boltz-middleware/commit/0826ad4))
* chain listen currency of reverse swaps ([#33](https://github.com/BoltzExchange/boltz-middleware/issues/33)) ([dddcf93](https://github.com/BoltzExchange/boltz-middleware/commit/dddcf93))
* error when message is sent to a Slack thread ([557c2cc](https://github.com/BoltzExchange/boltz-middleware/commit/557c2cc))
* error when message is sent to a Slack thread ([#54](https://github.com/BoltzExchange/boltz-middleware/issues/54)) ([d315469](https://github.com/BoltzExchange/boltz-middleware/commit/d315469))
* formatting of getbalance response ([#70](https://github.com/BoltzExchange/boltz-middleware/issues/70)) ([1ce5b8c](https://github.com/BoltzExchange/boltz-middleware/commit/1ce5b8c))
* improve CSV formatting ([#76](https://github.com/BoltzExchange/boltz-middleware/issues/76)) ([341f9e8](https://github.com/BoltzExchange/boltz-middleware/commit/341f9e8))
* more accommodating limits ([#79](https://github.com/BoltzExchange/boltz-middleware/issues/79)) ([8ebf2d3](https://github.com/BoltzExchange/boltz-middleware/commit/8ebf2d3))
* set timeout block number of swaps ([#43](https://github.com/BoltzExchange/boltz-middleware/issues/43)) ([0378f92](https://github.com/BoltzExchange/boltz-middleware/commit/0378f92))
* stringify maps as objects instead of arrays ([148c432](https://github.com/BoltzExchange/boltz-middleware/commit/148c432))
* timeout of event stream after 2 minutes ([#59](https://github.com/BoltzExchange/boltz-middleware/issues/59)) ([7e5656c](https://github.com/BoltzExchange/boltz-middleware/commit/7e5656c))
* use compatibility addresses by default ([#14](https://github.com/BoltzExchange/boltz-middleware/issues/14)) ([518b9cb](https://github.com/BoltzExchange/boltz-middleware/commit/518b9cb))
* verify amounts for reverse swaps ([#53](https://github.com/BoltzExchange/boltz-middleware/issues/53)) ([76b0ad9](https://github.com/BoltzExchange/boltz-middleware/commit/76b0ad9))


### Features

* add API endpoint for broadcasting transactions ([#10](https://github.com/BoltzExchange/boltz-middleware/issues/10)) ([330d359](https://github.com/BoltzExchange/boltz-middleware/commit/330d359))
* add API endpoint for creating reverse swaps ([#31](https://github.com/BoltzExchange/boltz-middleware/issues/31)) ([c0cfac8](https://github.com/BoltzExchange/boltz-middleware/commit/c0cfac8))
* add API endpoint for fee estimation ([#52](https://github.com/BoltzExchange/boltz-middleware/issues/52)) ([508c2ef](https://github.com/BoltzExchange/boltz-middleware/commit/508c2ef))
* add Discord command to generate new addresses ([#77](https://github.com/BoltzExchange/boltz-middleware/issues/77)) ([3afd072](https://github.com/BoltzExchange/boltz-middleware/commit/3afd072))
* add Discord commands swapinfo and help ([6a4f84b](https://github.com/BoltzExchange/boltz-middleware/commit/6a4f84b))
* add fee column to database ([0a171a0](https://github.com/BoltzExchange/boltz-middleware/commit/0a171a0))
* add generation of BIP21 payment requests ([#26](https://github.com/BoltzExchange/boltz-middleware/issues/26)) ([a06aaa7](https://github.com/BoltzExchange/boltz-middleware/commit/a06aaa7))
* add gRPC client for Boltz ([ab02bfb](https://github.com/BoltzExchange/boltz-middleware/commit/ab02bfb))
* add gRPC protobufs of boltz-backend ([3312250](https://github.com/BoltzExchange/boltz-middleware/commit/3312250))
* add InvoiceFailedToPay event to swap status ([ab340bc](https://github.com/BoltzExchange/boltz-middleware/commit/ab340bc))
* add pairs ([#15](https://github.com/BoltzExchange/boltz-middleware/issues/15)) ([9fc446f](https://github.com/BoltzExchange/boltz-middleware/commit/9fc446f))
* add preimage to invoice settled events ([#32](https://github.com/BoltzExchange/boltz-middleware/issues/32)) ([0359a7e](https://github.com/BoltzExchange/boltz-middleware/commit/0359a7e))
* add REST API for createSwap ([2f0004b](https://github.com/BoltzExchange/boltz-middleware/commit/2f0004b))
* add test for utils ([#64](https://github.com/BoltzExchange/boltz-middleware/issues/64)) ([71f92ac](https://github.com/BoltzExchange/boltz-middleware/commit/71f92ac))
* add TOML config file ([#4](https://github.com/BoltzExchange/boltz-middleware/issues/4)) ([50f911c](https://github.com/BoltzExchange/boltz-middleware/commit/50f911c))
* add tool to report swaps and collected fees ([#73](https://github.com/BoltzExchange/boltz-middleware/issues/73)) ([44f2243](https://github.com/BoltzExchange/boltz-middleware/commit/44f2243))
* add trading fee to swaps ([#56](https://github.com/BoltzExchange/boltz-middleware/issues/56)) ([203447c](https://github.com/BoltzExchange/boltz-middleware/commit/203447c))
* get balance with slack command ([6b906f8](https://github.com/BoltzExchange/boltz-middleware/commit/6b906f8))
* get swap status with GET request ([#58](https://github.com/BoltzExchange/boltz-middleware/issues/58)) ([652ae40](https://github.com/BoltzExchange/boltz-middleware/commit/652ae40))
* graceful error handling in the API ([#3](https://github.com/BoltzExchange/boltz-middleware/issues/3)) ([2321857](https://github.com/BoltzExchange/boltz-middleware/commit/2321857))
* improve logging of swap id ([#19](https://github.com/BoltzExchange/boltz-middleware/issues/19)) ([4c85469](https://github.com/BoltzExchange/boltz-middleware/commit/4c85469))
* improve swap not found error message ([#62](https://github.com/BoltzExchange/boltz-middleware/issues/62)) ([fdfeeaf](https://github.com/BoltzExchange/boltz-middleware/commit/fdfeeaf))
* include refunds in reverse swap status ([7130a78](https://github.com/BoltzExchange/boltz-middleware/commit/7130a78))
* include reverse claim fee in miner fees ([f7d76bd](https://github.com/BoltzExchange/boltz-middleware/commit/f7d76bd))
* integrate circleci ([#50](https://github.com/BoltzExchange/boltz-middleware/issues/50)) ([807a692](https://github.com/BoltzExchange/boltz-middleware/commit/807a692))
* log Discord bot commands ([50c7f05](https://github.com/BoltzExchange/boltz-middleware/commit/50c7f05))
* monitor balances ([#41](https://github.com/BoltzExchange/boltz-middleware/issues/41)) ([c9d9278](https://github.com/BoltzExchange/boltz-middleware/commit/c9d9278))
* new fee structure ([7e3350a](https://github.com/BoltzExchange/boltz-middleware/commit/7e3350a))
* notify about missing inbound liquidity ([#68](https://github.com/BoltzExchange/boltz-middleware/issues/68)) ([19344ca](https://github.com/BoltzExchange/boltz-middleware/commit/19344ca))
* optional hardcoded rates ([9b3388b](https://github.com/BoltzExchange/boltz-middleware/commit/9b3388b))
* reconnect to backend after subscription error ([#21](https://github.com/BoltzExchange/boltz-middleware/issues/21)) ([4f2c608](https://github.com/BoltzExchange/boltz-middleware/commit/4f2c608))
* reworked API method getpairs ([bcf290b](https://github.com/BoltzExchange/boltz-middleware/commit/bcf290b))
* save swap information in database ([#63](https://github.com/BoltzExchange/boltz-middleware/issues/63)) ([0102760](https://github.com/BoltzExchange/boltz-middleware/commit/0102760))
* send connection status to Slack channel ([#51](https://github.com/BoltzExchange/boltz-middleware/issues/51)) ([714d93d](https://github.com/BoltzExchange/boltz-middleware/commit/714d93d))
* send Slack message when connection to backend is lost ([326564e](https://github.com/BoltzExchange/boltz-middleware/commit/326564e))
* switch from Slack to Discord ([#57](https://github.com/BoltzExchange/boltz-middleware/issues/57)) ([57a823f](https://github.com/BoltzExchange/boltz-middleware/commit/57a823f))
* toggle availability of reverse swaps ([#80](https://github.com/BoltzExchange/boltz-middleware/issues/80)) ([549a524](https://github.com/BoltzExchange/boltz-middleware/commit/549a524))
* update rates regularly ([#22](https://github.com/BoltzExchange/boltz-middleware/issues/22)) ([1b33081](https://github.com/BoltzExchange/boltz-middleware/commit/1b33081))
* verify maximal and minimal amount ([dd0dd76](https://github.com/BoltzExchange/boltz-middleware/commit/dd0dd76))
* **api:** add retrieving transaction from its hash ([#11](https://github.com/BoltzExchange/boltz-middleware/issues/11)) ([3980cd2](https://github.com/BoltzExchange/boltz-middleware/commit/3980cd2))
* **api:** add timeout to createswap ([#13](https://github.com/BoltzExchange/boltz-middleware/issues/13)) ([0037c48](https://github.com/BoltzExchange/boltz-middleware/commit/0037c48))
* **api:** subscribe to swap events ([#16](https://github.com/BoltzExchange/boltz-middleware/issues/16)) ([47b1f41](https://github.com/BoltzExchange/boltz-middleware/commit/47b1f41))



