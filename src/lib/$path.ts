export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "blog": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/blog/[id]' as const, query: { id }, hash: url?.hash })
    }),
    "page": {
      _id: (id: string | number) => ({
        $url: (url?: { hash?: string }) => ({ pathname: '/blog/page/[id]' as const, query: { id }, hash: url?.hash })
      })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash })
  },
  "books": {
    $url: (url?: { hash?: string }) => ({ pathname: '/books' as const, hash: url?.hash })
  },
  "contact": {
    "contact_success": {
      $url: (url?: { hash?: string }) => ({ pathname: '/contact/contact_success' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  "form": {
    $url: (url?: { hash?: string }) => ({ pathname: '/form' as const, hash: url?.hash })
  },
  "library": {
    "chat": {
      $url: (url?: { hash?: string }) => ({ pathname: '/library/chat' as const, hash: url?.hash })
    },
    "dog": {
      $url: (url?: { hash?: string }) => ({ pathname: '/library/dog' as const, hash: url?.hash })
    },
    "gourmet": {
      $url: (url?: { hash?: string }) => ({ pathname: '/library/gourmet' as const, hash: url?.hash })
    },
    "pokemon": {
      $url: (url?: { hash?: string }) => ({ pathname: '/library/pokemon' as const, hash: url?.hash })
    },
    "todo": {
      $url: (url?: { hash?: string }) => ({ pathname: '/library/todo' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/library' as const, hash: url?.hash })
  },
  "mypage": {
    $url: (url?: { hash?: string }) => ({ pathname: '/mypage' as const, hash: url?.hash })
  },
  "parts": {
    "modal": {
      $url: (url?: { hash?: string }) => ({ pathname: '/parts/modal' as const, hash: url?.hash })
    },
    $url: (url?: { hash?: string }) => ({ pathname: '/parts' as const, hash: url?.hash })
  },
  "signin": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signin' as const, hash: url?.hash })
  },
  "signup": {
    $url: (url?: { hash?: string }) => ({ pathname: '/signup' as const, hash: url?.hash })
  },
  "work": {
    $url: (url?: { hash?: string }) => ({ pathname: '/work' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
