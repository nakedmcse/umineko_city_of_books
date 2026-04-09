-- +goose Up
ALTER TABLE mysteries ADD COLUMN paused INTEGER NOT NULL DEFAULT 0;

-- +goose Down
ALTER TABLE mysteries DROP COLUMN paused;
