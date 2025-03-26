listzip :: (a -> b -> c) -> [a] -> [b] -> [c]
listzip _ [] _ = []
listzip _ _ [] = []
listzip f (x:xs) (y:ys) = f x y : listzip f xs ys



main :: IO ()
main = do
    let result = listzip (+) [1, 2, 3] [4, 5, 6]
    putStrLn("the result is "++show result)

