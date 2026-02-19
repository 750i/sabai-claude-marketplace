# Changelog

All notable changes to this plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-02-20

### Added
- Email selection interface (`email-selection.md` skill)
- Numbered card view for email selection with urgency indicators
- Natural language selection ("the one from Sarah", "the budget email")
- Sorting options: by urgency, date, sender, subject
- Filtering options: by urgency level, sender, keywords
- Dismissal support to remove emails from list
- Pagination for large result sets (10+ emails)
- `--sort` flag to `/followup` command

### Changed
- `/followup` command now shows interactive selection interface
- Enhanced selection flow with confirm-before-proceed

## [1.1.0] - 2026-02-20

### Added
- Email follow-up detection algorithm (`follow-up-detection.md` skill)
- Auto-detect emails needing response based on urgency scoring
- Gmail query integration for filtering newsletters, automated emails
- Thread analysis to check for existing replies

### Changed
- `/followup` command now defaults to detection mode
- Added `--detect` and `--days` flags to `/followup` command

## [1.0.0] - 2026-02-16

### Added
- Initial release
