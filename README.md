# Discord-logbot-ver-1.0(β)

<!-- # Short Description -->

Discordのserver内の[発言・画像・URL・ファイル]を登録した一つのチャンネルにまとめるbotです。 \
現在β版のため、機能の利便性が悪い部分が多々ありますが今後の更新に期待していてください。

<!-- # Badges -->

[![Github issues](https://img.shields.io/github/issues/BarreI/Discord-logbot-ver-1.0)](https://github.com/BarreI/Discord-logbot-ver-1.0/issues)
[![Github forks](https://img.shields.io/github/forks/BarreI/Discord-logbot-ver-1.0)](https://github.com/BarreI/Discord-logbot-ver-1.0/network/members)
[![Github stars](https://img.shields.io/github/stars/BarreI/Discord-logbot-ver-1.0)](https://github.com/BarreI/Discord-logbot-ver-1.0/stargazers)
[![Github top language](https://img.shields.io/github/languages/top/BarreI/Discord-logbot-ver-1.0)](https://github.com/BarreI/Discord-logbot-ver-1.0/)
[![Github license](https://img.shields.io/github/license/BarreI/Discord-logbot-ver-1.0)](https://github.com/BarreI/Discord-logbot-ver-1.0/)

# Tags

`Discord bot` `Discord.js`

# Advantages

発言したタイミングのユーザーの情報や内容を正しく保存できるためその時、どんなやりとりが行われていたかが視覚的、直感的にわかります。
また発言を取り消してもlogには残るため、時系列の混乱や過去の消されたlogへのアクセスが容易に行えます。

今後はbot側からの検索機能や、過去logに対する編集の検知編集後のメッセージ取得などの機能追加を考えています。

# Installation

1.index.jsをインストールします。 \
2.id.jsonをindex.jsと同じフォルダ内におきます。 \
3.YOUR_TOKENに自身のbotのtokenを貼り付けてください。

# Deployment

Node.js v12.18.3 \
Discord.js v12.3.1 \
で起動してください。

# Minimal Example
1.logを出力したいchannelで '!setlog' を実行　\
2.botが反応し、logが出力されたら成功

:注: \
メッセージは全てembed化されています。そのため埋め込みを非表示の設定だと何も見えません。 \
ver1.0現在、出力できないものはデフォルトのユーザーアイコン system message の2つです。 

# Contributors

- [BarreI](https://github.com/BarreI)

<!-- CREATED_BY_LEADYOU_README_GENERATOR -->
