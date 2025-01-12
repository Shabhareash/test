composefiltermap :: (a -> Bool) -> (a -> b) -> [a] -> [b]
composefiltermap predicate mapper = map mapper . filter predicate

squarenumbersbelowfive :: [Int] -> [Int]
squarenumbersbelowfive = composefiltermap (<=5) (^2)

main :: IO ()
main = print (squarenumbersbelowfive [3, 7, 2, 8, 4, 6])



