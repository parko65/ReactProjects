// Mirrors JetMix.Api MaterialTypeDto. The API serializes the enum as a number
// (no JsonStringEnumConverter configured) and camelCases property names.
//
// A TS `enum` emits runtime code, which `erasableSyntaxOnly` forbids. The
// const-object + derived-union pattern below is fully erasable but still gives
// us enum-like call sites, e.g. MaterialCategory.Bitumen.
export const MaterialCategory = {
  Standard: 0,
  Bitumen: 1,
  Rap: 2,
} as const;

export type MaterialCategory =
  (typeof MaterialCategory)[keyof typeof MaterialCategory];

// Reverse lookup (number -> display name) for rendering.
export const categoryLabels = ['Standard', 'Bitumen', 'Rap'] as const;

export interface MaterialTypeDto {
  id: string;
  typeName: string;
  category: MaterialCategory;
  containerName: string;
}
