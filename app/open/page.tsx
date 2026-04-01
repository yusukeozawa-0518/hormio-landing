import OpenPageClient from './OpenPageClient'

export default async function OpenPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { lineUserId } = await searchParams
  const lineUserIdStr = Array.isArray(lineUserId) ? lineUserId[0] : lineUserId

  return <OpenPageClient lineUserId={lineUserIdStr} />
}
