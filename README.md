# Firebase Data Update Bug

This repository demonstrates a common error when updating data in the Firebase Realtime Database: unintentionally overwriting the entire data node instead of performing a selective update.

## Problem

The incorrect approach uses `set()` to update data.  This replaces the entire node with the provided data, losing any other existing values.

## Solution

The `update()` method is the correct approach. It only modifies the specified fields, leaving the rest of the data untouched.

## How to reproduce

1. Clone this repo
2. Set up a Firebase project
3. Run `bug.js` (incorrect implementation)
4. Run `bugSolution.js` (correct implementation)