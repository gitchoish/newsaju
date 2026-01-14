declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"guides": {
"avoiding-fortune-telling-scams.mdx": {
	id: "avoiding-fortune-telling-scams.mdx";
  slug: "avoiding-fortune-telling-scams";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"birth-time-importance-hour-pillar.mdx": {
	id: "birth-time-importance-hour-pillar.mdx";
  slug: "birth-time-importance-hour-pillar";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"common-saju-misconceptions-debunked.mdx": {
	id: "common-saju-misconceptions-debunked.mdx";
  slug: "common-saju-misconceptions-debunked";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"cultural-context-saju-korean-society.mdx": {
	id: "cultural-context-saju-korean-society.mdx";
  slug: "cultural-context-saju-korean-society";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"day-master-your-core-identity.mdx": {
	id: "day-master-your-core-identity.mdx";
  slug: "day-master-your-core-identity";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"earthly-branches-twelve-animals.mdx": {
	id: "earthly-branches-twelve-animals.mdx";
  slug: "earthly-branches-twelve-animals";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"heavenly-stems-explained.mdx": {
	id: "heavenly-stems-explained.mdx";
  slug: "heavenly-stems-explained";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"how-to-use-saju-responsibly.mdx": {
	id: "how-to-use-saju-responsibly.mdx";
  slug: "how-to-use-saju-responsibly";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"reading-your-saju-chart-beginners.mdx": {
	id: "reading-your-saju-chart-beginners.mdx";
  slug: "reading-your-saju-chart-beginners";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"saju-compatibility-what-it-really-means.mdx": {
	id: "saju-compatibility-what-it-really-means.mdx";
  slug: "saju-compatibility-what-it-really-means";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"saju-for-self-reflection-personal-growth.mdx": {
	id: "saju-for-self-reflection-personal-growth.mdx";
  slug: "saju-for-self-reflection-personal-growth";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"saju-vs-western-astrology-key-differences.mdx": {
	id: "saju-vs-western-astrology-key-differences.mdx";
  slug: "saju-vs-western-astrology-key-differences";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"ten-gods-relationships-explained.mdx": {
	id: "ten-gods-relationships-explained.mdx";
  slug: "ten-gods-relationships-explained";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"understanding-five-elements-wood-fire-earth-metal-water.mdx": {
	id: "understanding-five-elements-wood-fire-earth-metal-water.mdx";
  slug: "understanding-five-elements-wood-fire-earth-metal-water";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
"what-is-saju-korean-four-pillars.mdx": {
	id: "what-is-saju-korean-four-pillars.mdx";
  slug: "what-is-saju-korean-four-pillars";
  body: string;
  collection: "guides";
  data: InferEntrySchema<"guides">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
