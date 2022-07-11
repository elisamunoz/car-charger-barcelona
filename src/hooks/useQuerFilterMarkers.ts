import { useMemo } from 'react'
// import { useSelector } from 'react-redux'
// import { getAllMarkers } from 'redux/selectors'
// import type { BlockDefinition } from '@typeform/blocks/es/common/types/blocks'

const normalizeString = (st: string) =>
  // Modify string to lowercase and remove accents
  // Múltiples => multiples
  st
    .toLocaleLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const useQueryFilterMarkers = (
  markersDetails: any[] = [],
  query: string
) =>
  useMemo(() => {
    // Do not query when there is less than 3 typed values
    if (query.trim().length < 3) {
      return []
    }

    // return markersDetails
 
    const normalizedQuery = normalizeString(query)
    const hasMatchOnQuery = (st: string) =>
      normalizeString(st).includes(normalizedQuery)

    const filteredBlocks = markersDetails.filter(
      (marker: any) =>
        // Check if the queried value is on title or description
        hasMatchOnQuery(marker.city ?? '') ||
        hasMatchOnQuery(marker.city ?? '')
        // hasMatchOnQuery(block.description ?? '') ||
        // block.tags.find((it) => hasMatchOnQuery(it ?? ''))
    )

    return filteredBlocks
  }, [markersDetails, query])
  // }, [blockDefinitions, query])

  // const useQueryFilterMarkers = (
  //   // blockDefinitions: BlockDefinition[] = [],
  //   query: string = '',
  // ) =>
  //   useMemo(() => {
  //     // Do not query when there is less than 3 typed values
  //     if (query.trim().length < 2) {
  //       return []
  //     }
  
  //     const normalizedQuery = normalizeString(query)
  //     const hasMatchOnQuery = (st: string) =>
  //       normalizeString(st).includes(normalizedQuery)
  
  //     const filteredBlocks = blockDefinitions.filter(
  //       (block) =>
  //         // Check if the queried value is on title or description
  //         hasMatchOnQuery(block.title ?? '') ||
  //         hasMatchOnQuery(block.description ?? '') ||
  //         block.tags.find((it) => hasMatchOnQuery(it ?? ''))
  //     )
  
  //     return filteredBlocks
  //   }, [query])
  //   // }, [blockDefinitions, query])

export default useQueryFilterMarkers
