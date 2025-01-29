## TemplateName

Tba

## Selectors


### `useTemplateNameValue`

Returns value from the store

```javascript
import {useTemplateNameValue} from 'features/templateName';

// Needs to be run from inside React component or other hook.
const value = useTemplateName();
```

## Mutations

### `useIncrementTemplateName`

Increments `value` by 1

```javascript
import {useIncrementTemplateName} from 'features/templateName';

// Needs to be run from inside React component or other hook.
const incrementTemplateName = useIncrementTemplateName();

const handleClick = () => {
    incrementTemplateName();
}
```

