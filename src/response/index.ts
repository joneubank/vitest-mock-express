import type { ServerResponse, OutgoingMessage, IncomingMessage } from 'http';
import type { Writable } from 'stream';
import type { Response } from 'express';
import { Mock } from 'vitest';

import type { EventEventEmitter } from '../index.js';

interface StreamWritable extends EventEventEmitter {
	writable?: Writable['writable'];
	writableEnded?: Writable['writableEnded'];
	writableFinished?: Writable['writableFinished'];
	writableHighWaterMark?: Writable['writableHighWaterMark'];
	writableLength?: Writable['writableLength'];
	writableObjectMode?: Writable['writableObjectMode'];
	writableCorked?: Writable['writableCorked'];
	destroyed?: Writable['destroyed'];
	_write?: Mock;
	_writev?: Mock;
	_destroy?: Mock;
	_final?: Mock;
	write?: Mock;
	setDefaultEncoding?: Mock;
	end?: Mock;
	cork?: Mock;
	uncork?: Mock;
	destroy?: Mock;
	addListener?: Mock;
	emit?: Mock;
	on?: Mock;
	once?: Mock;
	prependListener?: Mock;
	prependOnceListener?: Mock;
	removeListener?: Mock;
}

interface HttpOutgoingMessage extends StreamWritable {
	req?: Partial<IncomingMessage>;
	chunkedEncoding?: OutgoingMessage['chunkedEncoding'];
	shouldKeepAlive?: OutgoingMessage['shouldKeepAlive'];
	useChunkedEncodingByDefault?: OutgoingMessage['useChunkedEncodingByDefault'];
	sendDate?: OutgoingMessage['sendDate'];
	finished?: OutgoingMessage['finished'];
	headersSent?: OutgoingMessage['headersSent'];
	connection?: Partial<OutgoingMessage['connection']>;
	socket?: Partial<OutgoingMessage['socket']>;
	setTimeout?: Mock;
	setHeader?: Mock;
	getHeader?: Mock;
	getHeaders?: Mock;
	getHeaderNames?: Mock;
	hasHeader?: Mock;
	removeHeader?: Mock;
	addTrailers?: Mock;
	flushHeaders?: Mock;
}

interface HttpServerResponse extends HttpOutgoingMessage {
	statusCode?: ServerResponse['statusCode'];
	statusMessage?: ServerResponse['statusMessage'];
	assignSocket?: Mock;
	detachSocket?: Mock;
	writeContinue?: Mock;
	writeHead?: Mock;
	writeProcessing?: Mock;
}

export interface MockResponse extends HttpServerResponse {
	status?: Mock;
	sendStatus?: Mock;
	links?: Mock;
	send?: Mock;
	json?: Mock;
	jsonp?: Mock;
	sendFile?: Mock;
	sendfile?: Mock;
	download?: Mock;
	contentType?: Mock;
	type?: Mock;
	format?: Mock;
	attachment?: Mock;
	set?: Mock;
	header?: Mock;
	headersSent?: Response['headersSent'];
	get?: Mock;
	clearCookie?: Mock;
	cookie?: Mock;
	location?: Mock;
	redirect?: Mock;
	render?: Mock;
	locals?: Partial<Response['locals']>;
	charset?: Response['charset'];
	vary?: Mock;
	app?: Partial<Response['app']>;
	append?: Mock;
	req?: Partial<Response['req']>;

	// allow custom properties to be provided
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
}
