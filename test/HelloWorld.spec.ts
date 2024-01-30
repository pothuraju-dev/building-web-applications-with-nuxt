import { test, expect } from 'vitest';

// import your component
import { HelloWorld } from '#components';

test('mount component', () => {
	expect(HelloWorld).toBeTruthy();
});