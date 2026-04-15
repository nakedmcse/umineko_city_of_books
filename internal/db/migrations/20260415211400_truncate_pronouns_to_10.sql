-- +goose Up

UPDATE users SET pronoun_subject = substr(pronoun_subject, 1, 10) WHERE length(pronoun_subject) > 10;
UPDATE users SET pronoun_possessive = substr(pronoun_possessive, 1, 10) WHERE length(pronoun_possessive) > 10;

-- +goose Down

-- no-op (truncation cannot be reversed)
SELECT 1;
