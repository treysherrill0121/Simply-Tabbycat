# Handwriting repair validation — November 20, 2026

The published static site calls `/api/transcribe` but this repository has no API server. The repair replaces that unavailable request with an experimental on-device TrOCR worker. No paid API, server, hosting plan change, or new site is required.

## What passed

- The free quantized `Xenova/trocr-base-handwritten` model read the real handwritten line at https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/handwriting.jpg as `Mr. Brown commented icily.`
- DOM-based flow checks passed: pasted term/definition notes produce four questions; gameplay has four answers; corrections survive insufficient definitions; reviewed notes are retained; errors restore scan controls and preserve the existing question bank.
- JavaScript syntax and whitespace checks passed.

## What failed and what remains unverified

- The real handwritten whiteboard photo at https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/handwritten_text.jpg did not produce usable line crops. Sending the entire photo directly to the model produced unrelated text (`Not logged inTalkContributionsCreate accountLog in`). This is a failure, not a transcription.
- Model inference was tested in Node, not in an Android browser. The local browser runtime could not launch, and the cloud browser could not reach the local development server. Browser-worker loading, phone memory use, and end-to-end photo upload remain unverified.
- No accurate full-page handwritten-photo-to-quiz test passed. Reliable automatic handwriting recognition has NOT been established for this free implementation. The model is intended for individual text lines, and line segmentation is fragile.

## User behavior

Recognition remains explicitly experimental. Every returned line goes to an editable review; fluent output is never treated as proof of accuracy. The app retains the existing printed-photo OCR, phone-scanner paste instructions, manual questions, premade quizzes, saved custom bank, and gameplay. Pasted/corrected notes take precedence over attached photos to avoid unnecessary rescans. A scan over 24 detected lines reports a limit instead of silently truncating.

Deployment must target the already-existing Simply Tabbycat Render service, after its workspace and repository linkage are verified. Do not create another service or change paid plans. No deployment was performed during this validation.
