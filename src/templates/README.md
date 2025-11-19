# Component Templates

This folder contains custom templates used by `generate-react-cli` to scaffold new components.

## Templates

### Default Template

Located in `default/component/` folder, used for all component types (components, containers, pages).

**Files:**

- `TemplateName.tsx` - Main component template
- `TemplateName.styled.ts` - Styled-components template
- `index.tsx` - Index/export template

## Usage

The templates use special placeholders that are replaced when generating components:

- `TemplateName` → Replaced with your component name (e.g., `Button`, `UserProfile`)
- File paths are automatically generated based on component type

## Example

When you run:

```bash
npx generate-react-cli component UserProfile
```

The CLI will:

1. Read the templates from this folder
2. Replace `TemplateName` with `UserProfile`
3. Generate files in `src/components/UserProfile/`:
    - `UserProfile.tsx`
    - `UserProfile.styled.tsx`
    - `index.tsx`

## Customization

You can modify these templates to match your team's coding standards:

- Add default imports
- Include common prop types
- Add JSDoc comments
- Update styling patterns
- Add default exports

## Important Notes

- Do NOT rename `TemplateName` in the files - this is used by the CLI
- Keep the `.tsx` extension for both files
- These templates are referenced in `generate-react-cli.json`

## See Also

- Main configuration: `../generate-react-cli.json`
- Usage guide: `../GENERATE_REACT_CLI_GUIDE.md`

