import { Mock } from 'vitest';
export interface EventEventEmitter {
	addListener?: Mock;
	on?: Mock;
	once?: Mock;
	removeListener?: Mock;
	off?: Mock;
	removeAllListeners?: Mock;
	setMaxListeners?: Mock;
	getMaxListeners?: Mock;
	listeners?: Mock;
	rawListeners?: Mock;
	emit?: Mock;
	listenerCount?: Mock;
	prependListener?: Mock;
	prependOnceListener?: Mock;
	eventNames?: Mock;
}
