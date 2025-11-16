import type { DocumentReference } from "firebase/firestore";
import type { store } from "./store";

declare global {
	interface Window {
		clarity: (...args: any[]) => void;
	}
}

export type RootState = ReturnType<typeof store.getState>;
export type InputChangeEvent = React.ChangeEvent<
	HTMLInputElement | HTMLTextAreaElement
>;

export type AuthPage = "login" | "signup" | "reset";

export interface TrackControlValues {
	bpm: number;
	key: string;
	isMetronomePlaying: boolean;
	autoScrollSpeed: number;
	showPulse?: boolean;
	viewMode?: "grid";
}

export interface UserSettings {
	ref?: DocumentReference;

	tracksUpdates?: {
		[key: string]: TrackControlValues;
	};

	isNumberChord?: boolean;
	isNotesEnabled?: boolean;
	isLyricsEnabled?: boolean;
	isChordsEnabled?: boolean;
}

export type SyncContext = {
	tracks: Track[];
	setlists: Setlist[];
	settings: UserSettings;
	areTracksLoading?: boolean;
	hasAuth?: boolean;
	isAuthLoading?: boolean;
	hasPendingWrites?: boolean;
	isSyncEnabled?: boolean;
	isEditMode?: boolean;
	setIsEditMode?: (value: boolean) => void;
};

/** Redux action states. */
export enum ActionState {
	REQUEST = "request",
	PENDING = "pending",
	FULFILLED = "fulfilled",
	REJECTED = "rejected",
}

/**
 * When any async operations happens,
 * this can be used to mention the state of the operation.
 */
export enum AsyncState {
	IDLE = "idle",
	REQUEST = "request",
	PENDING = "pending",
	FULFILLED = "fulfilled",
	REJECTED = "rejected",
}

export type Scale = string;
export type TimeSignature = string;

export interface StringKeyValue {
	[key: string]: string;
}

export interface BooleanKeyValue {
	[key: string]: boolean;
}

export type AccessRole = "owner" | "editor" | "viewer";

export interface AccessInfo {
	[key: string]: AccessRole;
}

export interface Track {
	id: string;
	ref?: DocumentReference;

	title: string;
	artist: string;
	album: string;
	streamUrl: string;

	key: string;
	scale: string;
	bpm: number;
	duration: number;
	timeSignature: TimeSignature;

	notes: StringKeyValue;
	lyrics: StringKeyValue;
	chords: StringKeyValue;
	barEnds: BooleanKeyValue;

	isPublic?: boolean;
	isReadOnly?: boolean;
	shouldRestrict?: boolean;

	access: AccessInfo;
}

export interface TimelinePosition {
	position: number;
	chord?: string;
	lyric?: string;
	note?: string;
	isBarEnd?: boolean;
}

export type TracksInSetlist = {
	[key: number]: string;
};

export interface Setlist {
	id: string;
	ref?: DocumentReference;
	name: string;
	tracks: TracksInSetlist;
	createdBy: string;
}
